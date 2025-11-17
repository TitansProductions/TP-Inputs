# TP Inputs

# Installation

1. When opening the zip file, open `tp_inputs-main` directory folder and inside there will be another directory folder which is called as `tp_inputs`, this directory folder is the one that should be exported to your resources (The folder which contains `fxmanifest.lua`).

2. Add `ensure tp_inputs` before all the Titans Productions Resources (Scripts) and after TP Versions in the resources.cfg or server.cfg, depends where your scripts are located.

# Developers 

TP-Inputs allows you to create a `Text Field`  input, `Multiple Options` Input and `Buttons Selection` Inputs which both return the selected / typed value.

*Fully responsive to all screen resolutions.*


**How to use Buttons Selection?**

When clicking a button, it will return `ACCEPT` or `DECLINE` values as a String.

```lua
local inputData = {
    title = "Your title",
    desc = "Your description",
    buttonparam1 = "ACCEPT",
    buttonparam2 = "DECLINE"
}
                            
TriggerEvent("tp_inputs:getButtonInput", inputData, function(cb)

    if cb == "ACCEPT" then
        -- do action
    end
end) 
```

**How to use Buttons Selection with returned values?**

When clicking a button, it will return BUY or SELL values as a String.

```lua
local inputData = {
    title = "Your title",
    desc = "Your description",
    buttonparam1 = "BUY",
    buttonparam2 = "SELL"
}
                            
TriggerEvent("tp_inputs:getButtonReturnedValuesInput", inputData, function(cb)

    if cb == "BUY" then
        -- do action
    end
end) 
```

**How to use Text Inputs?**

When clicking  `ACCEPT`  button, it will return the input text value as a String.

```lua
local inputData = {
    title = "Your title",
    desc = "Your description",
    buttonparam1 = "ACCEPT",
    buttonparam2 = "DECLINE"
}
                            
TriggerEvent("tp_inputs:getTextInput", inputData, function(cb)

    if cb == "TEST" then
        -- do action
    end
end) 
```

**How to use Multiple Option Inputs?**

When clicking ACCEPT button, it will return the selected option text value as a String.

```lua
local inputData = {
    title = "License Registration",
	desc  = "What license registration type would you like to create?",
	buttonparam1 = "ACCEPT",
	buttonparam2 = "DECLINE",

	options = {} -- <- The list with the name values.
}
	
TriggerEvent("tp_inputs:getSelectedOptionsInput", inputData, function(cb)
	if cb == "something" then
          -- do action
	end
			
end)
```


**How to use a slider?**

When clicking ACCEPT button, it will return the selected option text value as a String.

```lua
local inputData = {
    title = "Insert Quantity",
	desc  = "how much quantity would you like to withdraw?",
	buttonparam1 = "ACCEPT",
	buttonparam2 = "DECLINE",
	min          = 1, -- <- minimum quantity
	max          = 20, -- <- maximum quantity
}
	
TriggerEvent("tp_inputs:getSliderResult", inputData, function(cb)
	if cb ~= "DECLINE" then
          -- do action (returns an integer)
	end
			
end)
```

![image2](https://user-images.githubusercontent.com/84135181/220184654-76c6543e-054a-41ed-9eb0-adb5c3848549.png)
![image](https://user-images.githubusercontent.com/84135181/220184657-850ef2ce-2ccf-470b-8302-507aaaf7387c.png)
![4daf666e9268476a200f16ed43854f5e02e99dff](https://user-images.githubusercontent.com/84135181/228959243-0ac69849-925a-4002-9a98-070d11865c42.jpeg)
<img width="726" height="338" alt="image" src="https://github.com/user-attachments/assets/4cd13f24-37a5-4f88-a649-ab4b93754037" />



*This script will be an extra semi-requirement for my free or paid scripts and also can be used for everyone who is interested.*
