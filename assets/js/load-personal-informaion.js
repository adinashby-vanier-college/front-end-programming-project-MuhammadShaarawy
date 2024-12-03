
document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data/personal-information.json')
        .then(response => response.json())
        .then(data => {
            console.log("data", data);
            document.querySelectorAll('.myName').forEach(item => item.textContent = data.name);
            document.querySelectorAll('.profession').forEach(item => item.textContent = data.profession);
            document.querySelectorAll('.email').forEach(item => item.textContent = data.email);
            document.querySelectorAll('.mobile').forEach(item => item.textContent = data.mobile);
            document.querySelectorAll('.address').forEach(item => item.textContent = data.address);
            document.getElementById('skypeName').textContent = data.skypeName;
            document.getElementById('skypeInvite').setAttribute('href', data.skypeInvite);
            document.querySelectorAll('.linkedin').forEach(item => item.setAttribute('href', data.social_links.linkedin));
            document.querySelectorAll('.github').forEach(item => item.setAttribute('href', data.social_links.github));
            document.querySelectorAll('.twitter').forEach(item => item.setAttribute('href', data.social_links.twitter));
            document.querySelectorAll('.instagram').forEach(item => item.setAttribute('href', data.social_links.instagram));
        })
        .catch(error => console.error('Error fetching JSON:', error));
});