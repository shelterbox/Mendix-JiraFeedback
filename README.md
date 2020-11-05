# Mendix + Jira issue collector 🎒
Jira issue collector wrapped as a Mendix widget for [jira.shelterbox.org](https://jira.shelterbox.org/).

## How to use 🔧
To integrate your issue collector, you will need to first create one on Jira. Here is how...

1. ⚙ (Administrator) > Projects > **\<Project\>** > Issue collectors > ➕ Add issue collector
2. Fill out all the necessary fields
3. Submit

Once you have created an issue collector, you will need to get the collector ID. This is found in the URL parameters, look for the **collectorId**

> Example .../InsertCollectorHelp!default.jspa?projectKey=OAP&collectorId=**86cf8d49**

Copy the collector ID into the widget **Issue collector ID** field in Mendix.

If you have selected a custom trigger style in Jira, you will need to add a CSS selector in the **Custom trigger selector** Mendix widget parameter.

*This widget was made using the [Mendix widget boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate/).*

## Screenshots 📸
![Mendix parameters](/assets/example1.png?raw=true "Example 1")
![Working example](/assets/example2.png?raw=true "Example 2")
