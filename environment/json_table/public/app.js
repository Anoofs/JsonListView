$(document).ready(function() {
    $.getJSON("/api/agents")
    .then(addAgents);
    
    $('#findInput').keyup((event) => {
        if((event.which == 13)&&($('#findInput').val()!="")) {
            searchAgents();
        }
        else if($('#findInput').val()==""){
            $.getJSON("/api/agents")
            .then(addAgents);
        }
    })
});

function addAgents(agents) {
    $('.list').empty();
    $('.list').html('<tr class="headRow"><th class="firstName">First Name</th><th class="lastName">Last Name</th><th class="email">Email Id</th><th class="agency">Agency Name</th></tr>');
    agents.forEach(function(agent) {
        var newAgent = $('<tr class="agent">' + 
                            '<td>' + agent.firstname + '</td>' + 
                            '<td>' + agent.lastname + '</td>' + 
                            '<td>' + agent.email + '</td>'  + 
                            '<td>' + agent.agency_name + '</td>' + 
                        '</tr>');
        $('.list').append(newAgent);
    });
}

function searchAgents() {
    var searchText = $('#findInput').val();
    $.get('/api/agents/find', {search: searchText})
    .then(function(agents) {
        $('.list').empty();
        $('.list').html('<tr class="headRow"><th class="firstName">First Name</th><th class="lastName">Last Name</th><th class="email">Email Id</th><th class="agency">Agency Name</th></tr>');
        agents.forEach((agent) => {
            var newAgent = $('<tr class="agent">' + 
                    '<td>' + agent.firstname + '</td>' + 
                    '<td>' + agent.lastname + '</td>' + 
                    '<td>' + agent.email + '</td>'  + 
                    '<td>' + agent.agency_name + '</td>' + 
                '</tr>');
            $('.list').append(newAgent);
        });
    })
    .catch(function(err) {
        console.log(err);
    })
}