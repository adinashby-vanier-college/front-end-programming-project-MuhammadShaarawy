
document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data/resume.json')
        .then(response => response.json())
        .then(data => {
            console.log("resume", data);

            const resumeContainer = document.getElementById('resumeContainer');
            data.jobs.forEach(job => {
                const jobDiv = document.createElement('div');
                jobDiv.innerHTML = `
                    <h6 class="title text-danger">${job.period}</h6>
                    <p><strong>${job.companyName}</strong></p>
                    <p class="job-title"><i>${job.jobTitle}</i></p>
            `;

                const achievDiv = document.createElement('div');
                achievDiv.classList.add['subtitle'];

                const achievList = document.createElement('ul');

                job.achievements.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    achievList.appendChild(listItem);
                })

                achievDiv.appendChild(achievList);

                resumeContainer.appendChild(jobDiv);
                resumeContainer.appendChild(achievDiv);

            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});