$(document).ready(() => {

    $('form').on('submit', function (e) {
        e.preventDefault()

        const tarefa = $('#input-tarefa').val()
        const novatarefa = $(`<li> </li>`)

        $(`<p>${tarefa}</p>`).appendTo(novatarefa)

        $(novatarefa).appendTo('ul')

        $('#input-tarefa').val(' ')
    })

    $("ul").on('click', 'li', function () {
        $(this).toggleClass('feito')
    })

})