$(document).ready(function(){
    $(".sub-title").click(function(){
        $(this).next(".description").slideToggle(300);
        $(this).toggleClass("active");
    })
})
/*tabs*/
$('.item-tabs .list-tabs').click(function(){
    var tabId = $(this).attr('data-tab');
    var parentTabs = $(this).closest('.item-tabs');

    parentTabs.find('.list-tabs').removeClass('current');
    parentTabs.find('.tab-content').removeClass('current');

    $(this).addClass('current');
    parentTabs.find("#" + tabId).addClass('current');
});