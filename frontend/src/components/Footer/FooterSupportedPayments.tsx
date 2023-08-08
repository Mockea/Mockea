


const supportedPayment = [
  ["visa", "https://www.ikea.com/global/assets/logos/external-payment-providers/visa.svg"],
  ["mc", "https://www.ikea.com/global/assets/logos/external-payment-providers/master-card.svg"],
  ["ax", "https://www.ikea.com/global/assets/logos/external-payment-providers/american-express.svg"],
  ["ikano", "https://www.ikea.com/global/assets/logos/external-payment-providers/ikano.svg"],
  ["swish", "https://www.ikea.com/global/assets/logos/external-payment-providers/swish.svg"],
  ["bankid", "https://www.ikea.com/global/assets/logos/external-payment-providers/bankid.svg"],
  ["apple pay", "https://www.ikea.com/global/assets/logos/external-payment-providers/apple-pay.svg"],
  ["visa secure", "https://www.ikea.com/global/assets/logos/external-payment-providers/visa-secure.svg"],
  ["mc id check", "https://www.ikea.com/global/assets/logos/external-secure-logos/master-card-id-check.svg"]
]

const supportedPaymentJSX = supportedPayment.map(payment =>  <li><img className="footer__links-square-icons"src={payment[1]} alt={payment[0]} /></li>)

export const FooterSupportedPayments = () => {
  return (
    <>
      {supportedPaymentJSX}
    </>
  )
}
