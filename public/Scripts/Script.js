document.addEventListener('DOMContentLoaded', function() {
    const features = [
        { icon: 'fa-fire', title: "Tokenomics Calientes", desc: "Suministro limitado y quema automática" },
        { icon: 'fa-bolt', title: "Transacciones Rápidas", desc: "Velocidad de alpaca en la blockchain" },
        { icon: 'fa-users', title: "Comunidad Creciente", desc: "Únete a la manada más cool del criptoverso" }
    ];

    const featuresContainer = document.getElementById('features');

    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg transform hover:scale-105 transition-transform duration-200';
        featureDiv.innerHTML = `
            <i class="fas ${feature.icon} w-12 h-12 mx-auto mb-4 text-yellow-400" style="font-size: 48px;"></i>
            <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
            <p class="text-sm">${feature.desc}</p>
        `;
        featuresContainer.appendChild(featureDiv);
    });

    // Add smooth scroll behavior
    document.querySelector('a[href="#community-section"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#community-section').scrollIntoView({ behavior: 'smooth' });
    });
});