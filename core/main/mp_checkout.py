import mercadopago
def crearProductoDonacion(precio):
    sdk = mercadopago.SDK("TEST-2370204206272920-042717-88b024b7a31c176627c66beb59154aec-205401994")

    # Create a preference item
    preference_data = {
        "items": [
            {
                "title": "Donación",
                "quantity": 1,
                "description": "Aporte para ayudar a la Fundación Aprender Haciendo",
                "unit_price": precio
            }
        ]
    }

    preference = sdk.preference().create(preference_data) #status_here
    preference_response = preference["response"]

    print(preference)

    if preference["status"] == 400:
        return 400
    else:
        return(preference_response)