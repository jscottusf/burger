$(function() {
    $('#order-burger').on('click', function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $('#new-burger').val().trim(),
            devoured: 0
        };
        //console.log(newBuger);
        $.ajax('api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        )
        $('#new-burger').val('');
    })

    $('.devour-burger').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('burgerid');
        var devouredStatus = {
            devoured: 1
        }
        $.ajax('api/burgers/' + id, {
            type: "PUT",
            data: devouredStatus
        }).then( function() {
            location.reload();
        })
    })
});