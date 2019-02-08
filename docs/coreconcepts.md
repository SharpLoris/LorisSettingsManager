---
id: core-concepts
title: Core Concepts
sidebar_label: Core Concepts
---
In this guide we will go over some of the core concepts that will help you understand how Loris Settings Manager functions, as well as give you a better understanding of some of the terminology that is used in this documentation.

## Modules
Each setting you configure must belong to a **module**. This will not affect how it is accessed in code, but will be used for the purposes of UI management. It can be thought of as a *category* or *group* for your setting. What this allows you to do is to have separate settings menus for unrelated settings, with their states tracked and managed independently of one another. How you choose to group your settings is totally up to you, for example you might have one menu for **Video Settings** and another for **Audio Settings**. 

If you do not create any custom modules, all of your settings will simply belong to a module named **Default**.

## Setting Types
Each setting will have a **setting type** assigned to it. This is the value type that this setting will be storing. Currently the supported setting types are:

 - Integer - Use this to create a setting that will store a whole number
 - Boolean - Use this to create a setting that will store a true/false value
 - Float - Use this to create a setting that will be store a decimal number
 - String - Use this to create a setting that will store text
 - Resolution - Use this to create a setting that will store a Resolution value (Width x Height @ RefreshRate)

## Binding Types
Some setting types will have a dropdown called **Binding Type**. Binding type allows you to select which interface will be the *source of truth* for that setting. By default the dropdown will read **PlayerPrefs**, which is the interface Unity provides to allow saving small amounts of data such as settings to the disk. 

This feature provides direct integration with settings that are built into Unity already such as **Screen Resolution**, by allowing you to select those as your source of truth instead of PlayerPrefs. Some examples of binding types:

 - PlayerPrefs - Any setting for your game that will simply be stored on/read from the disk. This will likely be the majority of your settings.
 - Fullscreen Mode - A string setting binding type that allows you to make the Unity player's current fullscreen mode the source of truth.
 - Quality Level - A string setting binding type that allows you to make the Unity player's current quality level setting the source of truth.
 - Screen Resolution - A resolution setting binding type that allows you to make the Unity player's current resolution the source of truth.

## Game Settings
Game Settings is a static class, and your main point of access for the settings you have configured. The idea is that once you've configured your settings in the editor, you should easily be able to get their value in your code. 

For example, let's say that you've configured a boolean setting in your game called `Autosave Enabled` and you want to know its value in one of your scripts, you would simply do the following:

`UtilityLoris.GameSettings.GetBoolValue("Autosave Enabled");`

Of course, you wouldn't need to explicitly type the namespace if you added:

`using UtilityLoris;`

## Input Binder
An input binder is a monobehaviour that creates a two way binding between a UI input and a setting. When the value in the input binder changes, the value stored in the settings `EditableValue` will be updated to match. Equally, when the value in `EditableValue` is updated, all inputs bound to that setting will be updated with the new value. **Note that the actual setting will not be changed until it is saved.**

You are provided with several InputBinder implementations to support every UI Input built into Unity, to support rapid prototyping and all major use cases. If you have any custom UI inputs you can use the provided ones as a template to very quickly (less than 10 minutes) write your own custom InputBinder. 

It is hoped that as time goes on Loris Settings Manager will be able to provide official support for any particularly popular input packs.

## Menu Manager
The menu manager is a monobehaviour that you can use to add many of the features you would expect to a settings menu without you having to write them yourself. If you have any unusual use cases you can write your own manager for this, but the provided `SettingsMenuManager` should provide the functionality to cover any of the most common use cases.

Some of the functionality it provides:

 - An interface to save changes, discard changes or restore defaults on every setting in a given module
 - Track the overall validity of a module
 - Track whether a module has any settings that have been modified
 - Track whether a module has any settings that don't match their default values
 - Several events that you can subscribe to in your own code such as `IsValidChanged`, `IsModifiedChanged` and `IsDefaultChanged`
 - Configure which module it controls easily from the Unity inspector
