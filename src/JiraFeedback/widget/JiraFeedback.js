define([
  "dojo/_base/declare",
  "mxui/widget/_WidgetBase",
  "dojo/dom-style",
  "dojo/_base/lang",
  "JiraFeedback/lib/bundle"
], function (declare, _WidgetBase, dojoStyle, lang, bundle) {
  "use strict";

  return declare("JiraFeedback.widget.JiraFeedback", [_WidgetBase], {

    // Internal variables.
    _handles: null,
    _contextObj: null,

    // Properties.
    collectorId: null,
    triggerSelector: null,

    constructor: function () {
      this._handles = [];
    },

    postCreate: function () {
      var context = this;
      logger.debug(this.id + ".postCreate");

      // Create button
      jQuery.ajax({
        url: "https://jira.shelterbox.org/s/1189ff948d1b68a148b91e9683e77866-T/qc6b6/805004/48eb35b5937edc0e2a14390cdfc2a583/4.0.0/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=" + this.collectorId,
        type: "get",
        cache: true,
        dataType: "script"
      });

      // Add click trigger to css class
      if (context.triggerSelector != null && context.triggerSelector != '') {
        window.ATL_JQ_PAGE_PROPS = {
          "triggerFunction": function (showCollectorDialog) {
            jQuery(context.triggerSelector).click(function (e) {
              e.preventDefault();
              showCollectorDialog();
            });
          }
        };
      }
    },

    update: function (obj, callback) {
      logger.debug(this.id + ".update");

      this._contextObj = obj;
      this._updateRendering(callback);
    },

    resize: function (box) {
      logger.debug(this.id + ".resize");
    },

    uninitialize: function () {
      logger.debug(this.id + ".uninitialize");
    },

    _updateRendering: function (callback) {
      logger.debug(this.id + "._updateRendering");

      if (this._contextObj !== null) {
        dojoStyle.set(this.domNode, "display", "block");
      } else {
        dojoStyle.set(this.domNode, "display", "none");
      }

      this._executeCallback(callback, "_updateRendering");
    },

    // Shorthand for running a microflow
    _execMf: function (mf, guid, cb) {
      logger.debug(this.id + "._execMf");
      if (mf && guid) {
        mx.ui.action(mf, {
          params: {
            applyto: "selection",
            guids: [guid]
          },
          callback: lang.hitch(this, function (objs) {
            if (cb && typeof cb === "function") {
              cb(objs);
            }
          }),
          error: function (error) {
            console.debug(error.description);
          }
        }, this);
      }
    },

    // Shorthand for executing a callback, adds logging to your inspector
    _executeCallback: function (cb, from) {
      logger.debug(this.id + "._executeCallback" + (from ? " from " + from : ""));
      if (cb && typeof cb === "function") {
        cb();
      }
    }
  });
});

require(["JiraFeedback/widget/JiraFeedback"]);
