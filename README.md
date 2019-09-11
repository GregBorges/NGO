# nonprofiters

> A social platform for social causes.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Old Firebase Rules
```json
{
    "rules" : {
        "resource" : {
            ".indexOn" : ["country", "countryState", "countryStateRegion"],
            ".read" : true,
            "$resourceID" : {
                ".write" : "auth != null",
                "$other" : {".validate" : false},

                "_id" : {".validate" : "newData.exists() && $resourceID === newData.val() && newData.isString() && newData.val().length < 48"},
                "_createdOn" : {".validate" : "newData.exists() && newData.isNumber() && newData.val() < 99999999999999"},
                "_createdBy" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 48)"},
                "_ownedBy" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 48)"},
                "address" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 256)"},
                "adminAreaLevel1" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 256)"},
                "adminAreaLevel2" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 256)"},
                "adminAreaLevel3" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 256)"},
                "categories" : {".validate" : "newData.isString() && newData.val().length < 256"},
                "country" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 256)"},
                "countryState" : {".validate" : "newData.isString() && newData.val().length < 256"},
                "countryStateRegion" : {".validate" : "newData.isString() && newData.val().length < 256"},
                "description" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 600)"},
                "ext" : {".validate" : "!newData.exists() || ((newData.isString() && newData.val().length < 16) || (newData.isNumber() && newData.val() < 99999))"},
                "hours" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 600)"},
                "lat" : {".validate" : "!newData.exists() || newData.val() === '' || (newData.isNumber() && (newData.val() <= 90 && newData.val() >= -90))"},
                "lng" : {".validate" : "!newData.exists() || newData.val() === '' || (newData.isNumber() && (newData.val() <= 180 && newData.val() >= -180))"},
                "placeID" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 128)"},
                "phone" : {".validate" : "!newData.exists() || ((newData.isString() && newData.val().length < 16) || (newData.isNumber() && newData.val() < 9999999999999))"},
                "room" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 128)"},
                "title" : {".validate" : "newData.isString() && newData.val().length < 100"},
                "transits" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 600)"},
                "website" : {".validate" : "!newData.exists() || (newData.isString() && newData.val().length < 256)"}
            }
        }
    }
}
```
