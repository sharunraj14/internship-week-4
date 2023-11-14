document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');
    const homeLink = document.getElementById('home-link');
    const articleLink = document.getElementById('article-link');
    const aboutLink = document.getElementById('about-link');

    function fetchBlogPosts() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { title: 'Post 1', content: 'Title: "Unveiling the Future: Exploring the Latest Tech Trends"\n\nIntroduction:\nWelcome to the cutting edge! In the rapidly evolving world of technology, staying ahead of the curve is essential. In this blog post, we\'ll take a deep dive into some of the latest tech trends that are shaping the future and revolutionizing the way we live, work, and interact.\n\n1. Artificial Intelligence (AI) and Machine Learning:\n- AI is not just a buzzword; it\'s transforming industries. From predictive analytics to virtual assistants, AI is making waves. Machine learning algorithms are becoming more sophisticated, enabling computers to learn and improve without explicit programming.\n\n2. 5G Technology:\n- The fifth generation of wireless technology is here, and it\'s a game-changer. With faster speeds and lower latency, 5G is paving the way for innovations like augmented reality (AR), virtual reality (VR), and the Internet of Things (IoT) to reach their full potential.\n\n3. Augmented Reality (AR) and Virtual Reality (VR):\n- AR and VR are no longer confined to the realm of gaming. Industries like healthcare, education, and retail are embracing these technologies. From immersive training simulations to virtual shopping experiences, AR and VR are creating new possibilities.\n\n4. Edge Computing:\n- Edge computing brings processing power closer to the data source, reducing latency and enhancing performance. This is especially crucial for applications like autonomous vehicles, smart cities, and IoT devices that require real-time data processing.\n\n5. Cybersecurity Innovations:\n- As technology advances, so do cybersecurity threats. Innovations in biometric authentication, AI-driven threat detection, and blockchain are reinforcing our digital defenses. Cybersecurity is no longer a reactive measure but a proactive and evolving field.\n\n6. Quantum Computing:\n- Quantum computing is on the horizon, promising unparalleled processing power. While it\'s still in its early stages, researchers and tech giants are making significant strides in developing this revolutionary technology, which could solve complex problems currently beyond the reach of classical computers.\n\n7. Robotics and Automation:\n- From manufacturing to healthcare, robots and automation are reshaping industries. Collaborative robots (cobots) are working alongside humans, and advancements in artificial intelligence are enabling robots to perform increasingly complex tasks.\n\n8. **Biotechnology and Health Tech:\n- The intersection of technology and healthcare is giving rise to innovative solutions. Wearable devices, telemedicine, and personalized medicine are transforming the patient experience. Genetic editing technologies like CRISPR are opening new possibilities in treating genetic disorders.\n\nConclusion:\nThe pace at which technology is advancing is exhilarating. These trends represent just a glimpse into the future, where the boundaries of what is possible continue to expand. Embracing these technologies and staying informed is not just an option but a necessity in this digital age. As we navigate this tech-driven landscape, one thing is certain: the future is now, and it\'s incredibly exciting!', image: 'post1.jpg' },
                    { title: 'Post 2', content: 'Title: "Breaking Barriers: Recent Scientific Marvels"\n\nIntroduction:\nScience continues to unravel the mysteries of our universe, and recent breakthroughs are reshaping the way we perceive the world. In this brief exploration, we\'ll delve into some of the latest scientific discoveries that are pushing boundaries and inspiring awe.\n\n1. Quantum Leap:\n- Quantum supremacy becomes a reality as Google\'s Sycamore processor outpaces traditional supercomputers. The dawn of quantum computing is upon us, promising unimaginable computational power.\n\n2. CRISPR-Cas9: Precision Gene Editing:\n- The CRISPR-Cas9 gene-editing tool advances, holding the promise to eradicate genetic disorders and reshape the future of medicine by rewriting our DNA.\n\n3. Vaccine Triumph:\n- mRNA technology takes center stage with COVID-19 vaccines from Pfizer-BioNTech and Moderna, showcasing unprecedented efficacy and revolutionizing vaccine development timelines.\n\n4. Mars Exploration:\n- NASA\'s Perseverance rover successfully lands on Mars, equipped with state-of-the-art instruments, marking a significant leap in our quest to uncover the mysteries of the Red Planet.\n\n5. AI\'s Scientific Revolution:\n- Artificial intelligence accelerates scientific breakthroughs, from predicting protein structures to expediting drug discovery, opening new frontiers in research.\n\n6. **Neural Interfaces:\n- Bridging man and machine, advancements in neural interface technology hold the key to revolutionary applications, from enhancing prosthetics to unlocking the secrets of the human brain.\n\nConclusion:\nAs we stand on the precipice of discovery, these recent scientific marvels not only redefine what is possible but also beckon us towards a future where the boundaries of knowledge are constantly expanding. The journey of exploration continues, promising even more astonishing revelations in the years to come.', image: 'post2.jpeg' },
                ]);
            }, 1000);
        });
    }

   
    function updateContent(linkId) {
        contentDiv.innerHTML = '<p>Loading...</p>';
        
        switch (linkId) {
            case 'home-link':
                contentDiv.innerHTML = "<h2>Welcome to Sharun's Blog!</h2>";
                document.body.style.backgroundImage = 'url("background.avif")';
                break;
            case 'article-link':
                fetchBlogPosts().then(posts => {
                    const postList = posts.map(post => `
                        <article>
                            <h2>${post.title}</h2>
                            <img src="${post.image}" alt="${post.title} Image">
                            <p>${post.content}</p>
                        </article>`).join('');
                    contentDiv.innerHTML = postList;
                });
                document.body.style.backgroundImage = ''; 
                break;
            case 'about-link':
                contentDiv.innerHTML = '<h2>About Us</h2><p>Explore with us as we unravel the complexities of emerging technologies, share insights into groundbreaking research, and showcase the innovative products shaping our future. Whether you are a seasoned tech professional or a curious newcomer, our content is crafted to cater to all levels of interest and expertise.</p>';
                document.body.style.backgroundImage = ''; 
                break;
            default:
                contentDiv.innerHTML = '<p>Page not found.</p>';
                document.body.style.backgroundImage = ''; 
        }
    }

  
    homeLink.addEventListener('click', () => updateContent('home-link'));
    articleLink.addEventListener('click', () => updateContent('article-link'));
    aboutLink.addEventListener('click', () => updateContent('about-link'));

    
    updateContent('home-link');
});
