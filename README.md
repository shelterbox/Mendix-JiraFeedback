> [!NOTE]
> **This repository is no longer actively maintained.**
> 
> We appreciate all the contributions and support from the community over the years. For those interested in continuing the development, feel free to fork the repository.
> 
> If you have any questions or need assistance, please refer to the existing documentation and issues. Thank you for your understanding.

# Mendix + Jira issue collector 🎒
Jira issue collector wrapped as a Mendix widget for [jira.shelterbox.org](https://jira.shelterbox.org/).

## How to use 🔧
To integrate your issue collector, you will need to first create one on Jira. Here is how...

1. ⚙ (Administrator) > Projects > **\<Project\>** > Issue collectors > ➕ Add issue collector
2. Fill out all the necessary fields
3. Submit

Once you have created an issue collector, you will need to get the collector URL. This is found in the "Embedding this issue collector" section of the issue collector settings page under the JavaScript tab. Copy the string value of the url property from the snippet:

```JavaScript
// Requires jQuery!
jQuery.ajax({
    url: "https://shelterbox.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/r5gghz/b/3/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-GB&collectorId=fc1106d0",
    type: "get",
    cache: true,
    dataType: "script"
});

```
... to get:
```JavaScript
https://shelterbox.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/r5gghz/b/3/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-GB&collectorId=fc1106d0
```

Paste the collector URL into the widget **Issue collector ID** field in Mendix.

If you have selected a custom trigger style in Jira, you will need to add a CSS selector in the **Custom trigger selector** Mendix widget parameter.

*This widget was made using the [Mendix widget boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate/).*

## Screenshots 📸
![Mendix parameters](/assets/example1.png?raw=true "Example 1")
![Working example](/assets/example2.png?raw=true "Example 2")
