(() => {

    /**
     * @ngdoc function
     * @name SidePanelPlugController
     * @module app.layout
     * @description
     *
     * The `SidePanelPlugController` controller handles the side panel plug view.
     * `self.active` is triggering an `active` CSS class to be added to the side panel plug when it's active.
     */
    angular
        .module('app.layout')
        .controller('SidePanelPlugController', SidePanelPlugController);

    /**
     * SidePanel plug controller
     * `self.active` is bound to a CSS class that prevents the plug view from occupying space when its content is not visible.
     */
    function SidePanelPlugController() {
        const self = this;

        self.active = true;
        self.closePanel = closePanel;

        ////////

        function closePanel() {
            console.log('Closing panel');
        }
    }
})();
