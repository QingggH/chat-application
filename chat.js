const users = {
  Amit: { username: "Amit", avatar: "/images/avatar-amit.jpg" },
  Bao: { username: "Bao", avatar: "/images/avatar-bao.jpg" },
  Qing: { username: "Qing", avatar: "/images/avatar-qing.jpg" },
};
const messages = [
  {
    avatar: "/images/avatar-amit.jpg",
    sender: "Amit",
    text: "You up?",
  },
  {
    avatar: "/images/avatar-bao.jpg",
    sender: "Bao",
    text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  },
];

// Below uses destrucuring
function addMessage({ avatar, sender, text }) {
  messages.push({ avatar, sender, text });
}

const chat = {
  users,
  messages,
  addMessage,
};

module.exports = chat;
