<?php

namespace Craft;

class RedactorFootnotesPlugin extends BasePlugin
{
    function getName()
    {
         return 'Redactor Footnotes';
    }

    function getVersion()
    {
        return '0.0.1';
    }

    function getDeveloper()
    {
        return 'Chris Maddox';
    }

    public function getPluginUrl()
    {
        return 'https://github.com/tyre/redactorfootnotes';
    }

    public function getDocumentationUrl()
    {
        return $this->getPluginUrl() . '/blob/master/README.md';
    }


    public function getSourceLanguage()
    {
        return 'en';
    }

    public function init()
    {
        parent::init();
        if (craft()->request->isCpRequest())
        {
            craft()->templates->includeJsResource('redactorfootnotes/js/redactor-footnotes.js');
        }
    }
}
