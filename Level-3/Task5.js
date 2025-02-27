document.addEventListener('DOMContentLoaded', () => {
    const apiDataContainer = document.getElementById('api-data');

    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
        
            data.forEach(post => {
                const postCard = document.createElement('div');
                postCard.classList.add('card');
                postCard.innerHTML = `
                    <h3>Post ${post.id}</h3>
                    <p><strong>Title:</strong> ${post.title}</p>
                    <p><strong>Body:</strong> ${post.body}</p>
                `;
                apiDataContainer.appendChild(postCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
