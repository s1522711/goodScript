function testPost() {
    let postInput = document.getElementsByName("glitInput")[0];
    postInput.value = "test";
    document.forms[1].submit();
}

document.addEventListener("DOMContentLoaded", function () {
    testPost();
});
