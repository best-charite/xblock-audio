/* jshint unused: false */

function AudioXBlockStudio(runtime, element) {
    $(function () {
        var server = new AudioXBlock.Server(runtime, element);
        var view = new AudioXBlock.StudioView(server, runtime, element);
        view.render();
    });
}

function AudioXBlockStudent(runtime, element) {
    $(function () {
        var server = new AudioXBlock.Server(runtime, element);
        var view = new AudioXBlock.StudentView(server, runtime, element);
        view.render();
    });
}
