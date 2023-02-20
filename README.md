# TP-Inputs

TP-Inputs allows you to create a `Text Field` input or `Buttons Selection Inputs` with which both return the selected / typed value. 

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

*This script will be an extra semi-requirement for my free or paid scripts.*

![image2](https://user-images.githubusercontent.com/84135181/220184654-76c6543e-054a-41ed-9eb0-adb5c3848549.png)
![image](https://user-images.githubusercontent.com/84135181/220184657-850ef2ce-2ccf-470b-8302-507aaaf7387c.png)
