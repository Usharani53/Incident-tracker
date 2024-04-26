sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("incidentman.controller.View2", {
            onInit: function () {

            },
            saveDocument: function () {
                var oinp = this.getById("incno");
                oinp.bindProperty("value", "incno");
            }
           
            
        });
    });
