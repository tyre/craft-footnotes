<?php

namespace Craft;

class CraftFootnotesPlugin extends BasePlugin
{
    function getName()
    {
         return 'Craft Footnotes';
    }

    function getVersion()
    {
        return '0.0.1';
    }

    function getDeveloper()
    {
        return 'Chris Maddox';
    }

    function getDeveloperURL()
    {
        return 'https://github.com/tyre';
    }

    public function getPluginUrl()
    {
        return 'https://github.com/tyre/craftfootnotes';
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
            craft()->templates->includeJsResource('craftfootnotes/js/redactor-footnotes.js');
        }
    }
}
