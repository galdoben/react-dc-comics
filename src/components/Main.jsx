import Card from "./Card"

const Main = ({ comics }) => {
  const comicsCards = [...comics]

  return (
    <main>
      <div className="container-fluid bg-black text-bg-dark p-3">
        {comicsCards.map((comicsCard, id) => {
          return <Card key={id} props={comicsCard} />
        })}
      </div>
      <div className="container-fluid bg-primary">
        <img src="img/buy-comics-digital-comics.png" /><span> DIGITAL COMICS </span>
        <img src="img/buy-comics-merchandise.png" /><span> DIGITAL COMICS </span>
        <img src="img/buy-comics-subscriptions.png" /><span> DIGITAL COMICS </span>
        <img src="img/buy-comics-shop-locator.png" /><span> DIGITAL COMICS </span>
        <img src="img/buy-dc-power-visa.svg" /><span> DIGITAL COMICS </span>

      </div>

    </main>
  )
}

export default Main