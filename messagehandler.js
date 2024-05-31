document.addEventListener('DOMContentLoaded', () => {
    loadMessages();
});

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
    messages.forEach((message, index) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <strong>${message.name}</strong>
                <span class="message-time">${new Date(message.timestamp).toLocaleString()}</span>
                <p>${message.content}</p>
            </div>
            <span class="delete-btn" onclick="confirmDeleteMessage(${index})">&times;</span>
        `;
        messageList.appendChild(messageDiv);
    });
}

function addMessage() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const content = document.getElementById('content').value;

    if (name && password && content) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, password, content, timestamp: Date.now() });
        localStorage.setItem('messages', JSON.stringify(messages));
        loadMessages();
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('모든 필드를 입력해 주세요.');
    }
}

function confirmDeleteMessage(index) {
    const password = prompt('비밀번호를 입력해 주세요:');
    if (password !== null) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        if (messages[index].password === password) {
            messages.splice(index, 1);
            localStorage.setItem('messages', JSON.stringify(messages));
            loadMessages();
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }
}