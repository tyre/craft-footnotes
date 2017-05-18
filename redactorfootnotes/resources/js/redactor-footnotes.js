if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.footnotes = function() {
  return {
    init: function() {
      var button = this.button.add('footnotes', 'add<sup>src</sup>');
      this.button.addCallback(button, this.footnotes.show);
    },
    getTemplate: function() {
      return String()
        + '<div class="modal-section" id="redactor-modal-footnotes">'
          + '<section>'
            + '<label>Footnote reference number</label>'
            + '<input id="footnotes-reference-number" type="number"></input>'
          + '</section>'
          + '<section>'
            + '<button id="redactor-modal-button-action">Insert</button>'
            + '<button id="redactor-modal-button-cancel">Cancel</button>'
          + '</section>'
        + '</div>';
    },
    show: function() {
      this.modal.addTemplate('footnotes', this.footnotes.getTemplate());
      this.modal.load('footnotes', 'Add a footnote', 400);

      var button = this.modal.getActionButton();
      button.on('click', this.footnotes.insert);

      this.modal.show();

      $('#footnotes-reference-number').focus();
    },
    insert: function() {
      var footnotesReferenceNumber = $('#footnotes-reference-number').val();
      this.modal.close();
      this.insert.html(this.footnotes.footnotesHtml(footnotesReferenceNumber));
    },
    footnotesHtml: function(footnotesReferenceNumber) {
      return [
        String(),
        "<sup id=\"footnote-reference-",
        "\" class=\"footnote-reference\"><a href=\"#footnote-text-",
        "\">",
        "</a></sup>\""
      ].join(footnotesReferenceNumber);
    }
  };
};
