const cfg = window.TCB_CONFIG || {};
let supabaseClient = null;
if (cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && window.supabase) {
  supabaseClient = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
}

const $ = (s) => document.querySelector(s);
const content = window.TCB_CONTENT;

function renderHero() {
  const title = content.hero.title.replace(/\n/g, "<br>");
  $("#heroTitle").innerHTML = title.replace("Culture.", "<span>Culture.</span>");
  $("#heroDesc").textContent = content.hero.description;
}

async function loadRemoteContent() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient.from("site_content").select("content_key,value");
  if (error || !data) return;
  const hero = data.find(x => x.content_key === "hero");
  if (hero?.value) {
    content.hero.title = hero.value.title || content.hero.title;
    content.hero.description = hero.value.description || content.hero.description;
    renderHero();
  }
}

function initMenu() {
  $("#menuBtn").addEventListener("click", () => {
    const nav = $("#nav");
    nav.style.display = nav.style.display === "flex" ? "" : "flex";
  });
  document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => {
    if (innerWidth <= 850) $("#nav").style.display = "";
  }));
}

async function initAdmin() {
  const state = $("#adminState"), panel = $("#adminPanel");
  if (!supabaseClient) {
    state.innerHTML = '<div class="admin-msg">Admin CMS is not connected yet. The public website is running in demo/static mode. Add your Supabase URL and anon key in <code>config.js</code> to enable secure login and editing.</div>';
    return;
  }
  const { data: { session } } = await supabaseClient.auth.getSession();
  showAdmin(session);

  supabaseClient.auth.onAuthStateChange((_event, session) => showAdmin(session));

  function showAdmin(session) {
    if (!session) {
      state.innerHTML = `
        <form id="loginForm" class="admin-panel">
          <label>Email<input id="loginEmail" type="email" required placeholder="Admin email"></label>
          <label>Password<input id="loginPassword" type="password" required placeholder="Password"></label>
          <button class="btn btn-primary" type="submit">Sign in</button>
          <div id="loginMsg" class="admin-msg"></div>
        </form>`;
      panel.hidden = true;
      $("#loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const msg = $("#loginMsg");
        msg.textContent = "Signing in…";
        const { error } = await supabaseClient.auth.signInWithPassword({
          email: $("#loginEmail").value,
          password: $("#loginPassword").value
        });
        msg.textContent = error ? error.message : "Signed in.";
      });
    } else {
      state.innerHTML = `<div class="admin-msg">Signed in as <b>${session.user.email}</b>.</div>`;
      panel.hidden = false;
      $("#editHeroTitle").value = content.hero.title;
      $("#editHeroDesc").value = content.hero.description;
      $("#logout").onclick = () => supabaseClient.auth.signOut();
      $("#saveHero").onclick = async () => {
        const value = { title: $("#editHeroTitle").value, description: $("#editHeroDesc").value };
        const { error } = await supabaseClient.from("site_content")
          .upsert({ content_key: "hero", value, updated_at: new Date().toISOString() }, { onConflict: "content_key" });
        const msg = document.createElement("div");
        msg.className = "admin-msg";
        msg.textContent = error ? error.message : "Saved. Refreshing public content…";
        state.appendChild(msg);
        if (!error) { content.hero = value; renderHero(); }
      };
    }
  }
}

$("#year").textContent = new Date().getFullYear();
renderHero();
initMenu();
loadRemoteContent();
initAdmin();