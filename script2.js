function testPost() {
    let postInput = document.getElementsByName("glitInput")[0];
    postInput.value = "test";
    document.forms[1].submit();
    console.log("test");
}

document.addEventListener("DOMContentLoaded", function () {
    testPost();
});
