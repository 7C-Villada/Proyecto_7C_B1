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

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]

    return(preference)