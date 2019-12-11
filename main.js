document.querySelectorAll("a.clap_hand").forEach((node, i) => {
  if(i > 50) { node.dispatchEvent(new Event('mousedown'));  }
  }
);
