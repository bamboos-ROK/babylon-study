(() => {
  const pages = [
    { file: "1_mesh.html",    label: "Mesh",         emoji: "1️⃣" },
    { file: "2_texture.html", label: "Texture & UV", emoji: "2️⃣" },
    { file: "3_gltf.html",    label: "glTF / glb",   emoji: "3️⃣" },
    { file: "4_shader.html",  label: "Shader",        emoji: "4️⃣" },
  ];

  const current = location.pathname.split("/").pop();

  const style = document.createElement("style");
  style.textContent = `
    #shared-nav {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 6px;
      background: rgba(0, 0, 0, 0.82);
      padding: 8px 10px;
      border-radius: 40px;
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(8px);
      z-index: 9999;
      user-select: none;
    }
    .nav-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      font-family: sans-serif;
      background: transparent;
      color: #888;
      transition: background 0.15s, color 0.15s;
      text-decoration: none;
      white-space: nowrap;
    }
    .nav-btn:hover {
      background: rgba(255,255,255,0.08);
      color: #ddd;
    }
    .nav-btn.active {
      background: rgba(255,255,255,0.13);
      color: #fff;
      font-weight: 600;
    }
    .nav-divider {
      width: 1px;
      background: rgba(255,255,255,0.1);
      margin: 4px 0;
    }
  `;
  document.head.appendChild(style);

  const nav = document.createElement("nav");
  nav.id = "shared-nav";

  pages.forEach((page, i) => {
    if (i > 0) {
      const div = document.createElement("div");
      div.className = "nav-divider";
      nav.appendChild(div);
    }

    const a = document.createElement("a");
    a.className = "nav-btn" + (page.file === current ? " active" : "");
    a.href = page.file;
    a.innerHTML = `<span>${page.emoji}</span><span>${page.label}</span>`;
    nav.appendChild(a);
  });

  // DOM이 준비되면 삽입
  if (document.body) {
    document.body.appendChild(nav);
  } else {
    document.addEventListener("DOMContentLoaded", () => document.body.appendChild(nav));
  }
})();
