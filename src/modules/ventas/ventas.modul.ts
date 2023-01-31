import { Global ,Module} from "@nestjs/common";
import { ventasProviders } from "@ventas/providers";
import {DataBaseModule} from "@database";

@Global()
@Module({
    imports:[
        DataBaseModule,
    ],
    controllers:[],
    providers:[
        ...ventasProviders
    ],
    exports:[
        ...ventasProviders
    ]

})
export class VentasModule{

}