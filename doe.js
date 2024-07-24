
function showForm() {
    document.getElementById('form-section').style.display = 'block';
}

document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por se inscrever para doar sangue!');
    // Aqui você pode adicionar a lógica para enviar notificações por email
});

// Inicialização do mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: -23.550520, lng: -46.633308 },
        zoom: 12
    });

    const marker = new google.maps.Marker({
        position: { lat: -23.550520, lng: -46.633308 },
        map: map,
        title: 'Centro de Doação'
    });
}

// Inicialização do calendário
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Doação de Sangue - Centro A',
                start: '2024-08-01'
            },
            {
                title: 'Doação de Sangue - Centro B',
                start: '2024-08-15'
            }
        ]
    });
    calendar.render();
});