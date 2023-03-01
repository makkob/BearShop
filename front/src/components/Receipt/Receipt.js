import React from "react";
import { useSelector } from "react-redux";

import GooglePayButton from "@google-pay/button-react";

export default function Receipt() {
//   const { basketState } = useSelector((state) => state);
//   if (!basketState.loading && basketState.itemInBasket) {
//   }
//   const price = basketState.itemInBasket[1];

  return (
    <div>
      <GooglePayButton
        environment="TEST"
        buttonSizeMode="fill"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "17613812255336763067",
            merchantName: "Demo Only (you will not be charged)",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: 1,
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentData) => {
          console.log(
            "TODO: send order to server",
            paymentData.paymentMethodData
          );
          //   history.push("/confirm");
        }}
      />
    </div>
  );
}
