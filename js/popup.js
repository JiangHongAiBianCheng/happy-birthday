function showPopup(message) {
    if (!document.getElementById('popup')) {
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.innerText = message;
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '10px';
        popup.style.backgroundColor = 'white';
        popup.style.border = '1px solid black';
        popup.style.zIndex = '9999';
        popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        popup.style.borderRadius = '5px';
        popup.style.textAlign = 'center';
        popup.style.fontSize = '20px';
        popup.style.fontWeight = 'bold';
        popup.style.width = '200px';
        popup.style.height = '50px';
        document.body.appendChild(popup);
        setTimeout(() => {
            popup.remove();
        }, 3000);
    }
}