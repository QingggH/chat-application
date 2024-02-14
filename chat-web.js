const chatWeb = {
  chatPage: function (chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="/chat.css">
        </head>
        <body>
          <div id="chat-app">
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            ${chatWeb.getOutgoingSection(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function (chat) {
    return (
      `<ol class="messages">` +
      /////////
      chat.messages
        .map(
          (message) => `
        <li>
          <div class="message">
            <div class="message-avatar">
                <img src="${message.avatar}" alt="${message.sender}'s avatar">
            </div>
            <div class="message-container">
              ${message.text}
            </div>
          </div>
        </li>
      `
        )
        .join("") +
      `</ol>` +
      `</div>`
    );
  },
  getUserList: function (chat) {
    return (
      `<div class="userlist-container">` +
      `<ul class="users">` +
      Object.values(chat.users)
        .map(
          (user) => `
      <li>
        <div class="user">
          <div class="userlist-avatar">
            <img src="${user.avatar}" alt="${user.username}'s avatar">
          </div>
          <span class="username">${user.username}</span>
        </div>
      </li>
    `
        )
        .join("") +
      `</ul>`
    );
  },
  getOutgoingSection: function () {
    return `
    <div class = "text-field">
      <form action="/chat" method="post">
        <input type="hidden" name="avatar" value="/images/avatar-qing.jpg">
        <input type="hidden" name="username" value="Qing">
        <input type="text" name="text" placeholder="Type your message here" required>
        <button type="submit">Send</button>
      </form>
    </div>
    `;
  },
};
module.exports = chatWeb;
