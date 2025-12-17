import { getProducts } from '@/lib/mock';
import { createFileRoute, Link, notFound, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/(public)/categories/$categoryId/$subcategoryId',
)({
  component: RouteComponent,
  loader: async({ params: { subcategoryId } })=>{
      const products = await getProducts( subcategoryId );
      if ( products.length === 0) throw notFound();
  
      return { products }
    },
    pendingComponent: () => <div>Subcategory are loading....</div>
})

function RouteComponent() {
  const { products } = Route.useLoaderData();
  
    return(
      <div className="space-y-3">
        <h2 className="heading">Products: </h2>
          <div className="list">
  
          { products.map((product) => (
            <Link 
              className="card"
              activeProps={{ className: "active-card"}}
              from='/categories/$categoryId/$subcategoryId'
              to='/categories/$categoryId/$subcategoryId/$productId'
              params={{
                productId: product.id
              }}
              hash="product-details" //Esto auto-scrollea justo al Id product-details.. *ir al outlet!
              key={ product.id}
            >
              <p className="title">{ product.name}</p>
            </Link>
          ))}
          </div>
        <Outlet/>
      </div>
    )
}
