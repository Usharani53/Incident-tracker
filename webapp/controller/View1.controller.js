sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("incidentman.controller.View1", {
            onInit: function () {
               let oModel=new sap.ui.model.json.JSONModel("../model/incidents.json");
               this.getView().setModel(oModel);

            },
            onPress:function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("View2");
            },
            filterGlobally: function(oEvent) {
                var sQuery = oEvent.getParameter("query");
                this._oGlobalFilter = null;
    
                if (sQuery) {
                    this._oGlobalFilter = new Filter([
                        new Filter("IncidentNo", FilterOperator.Contains, sQuery),
                        
                    ], false);
                }
                this._filter();
            }
    
        });
    });
