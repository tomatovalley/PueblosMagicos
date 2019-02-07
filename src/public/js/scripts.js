$('#bnt-like').click(function(e) {
    e.preventDefault();
    let postId= $(this).data('id');

    $.post('post/' + postId + '/like')
        .done(data => {
            $('.likes-count').text(data.likes);
        })
});

$('btn-delete').click(function (e){
    e.preventDefault();
    let $this = $(this);
    const response = confirm('wanna delete the post?');
    if (response){
        let postId= $this.data('id');
        $.ajax({
            url: '/post/' + postId,
            type: 'DELETE'
        })
        .done(function (result) {
            console.log('deleted');
        })
    }
});