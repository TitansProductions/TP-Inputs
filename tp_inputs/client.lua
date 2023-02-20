local input

-----------------------------------------------------------
--[[ Events ]]--
-----------------------------------------------------------

AddEventHandler("tp_inputs:getButtonInput", function(data, cb)
    GetInput(data, false, cb)
end)

AddEventHandler("tp_inputs:getTextInput", function(data, cb)
    GetInput(data, true, cb)
end)


-----------------------------------------------------------
--[[ Functions ]]--
-----------------------------------------------------------

function GetInput(data, hasTextInput, cb)

    Citizen.CreateThread(function()

        ToggleUI(true)

        SendNUIMessage({ action = "open", inputData = data, hasTextInput =  hasTextInput})

        while not input do Citizen.Wait(50) end

        cb(input)

        Citizen.Wait(10)

        input = nil
        ToggleUI(false)

    end)
end 

function ToggleUI(display)
    SetNuiFocus(display,display)

    SendNUIMessage({ action = 'toggle', toggle = display })
end

-----------------------------------------------------------
--[[ NUI Callbacks ]]--
-----------------------------------------------------------

RegisterNUICallback('sendbuttonclickedinput', function(data)
    input = data.input
    ToggleUI(false)
end)

RegisterNUICallback('closeui', function()
    ToggleUI(false)
end)


-----------------------------------------------------------
--[[ Commands ]]--
-----------------------------------------------------------

RegisterCommand("testtpinput",function()

    local inputData = {
        title = "Please insert something",
        desc = "This is a test description",
        buttonparam1 = "ACCEPT",
        buttonparam2 = "DECLINE"
    }

    TriggerEvent("tp_inputs:getButtonInput", inputData, function(cb)
        print(cb)
    end) 
end)

RegisterCommand("fixtpinputs",function()
    ToggleUI(false)
end)

