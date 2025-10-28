// Afficher l'heure en temps réel
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const dateString = now.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    document.getElementById('time').textContent = `${dateString} - ${timeString}`;
}

// Mettre à jour l'heure toutes les secondes
updateTime();
setInterval(updateTime, 1000);

// Log dans la console pour confirmer que le JS fonctionne
console.log('✅ JavaScript chargé avec succès !');
console.log('🚀 Site en construction...');