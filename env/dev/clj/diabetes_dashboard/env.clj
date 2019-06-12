(ns diabetes-dashboard.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [diabetes-dashboard.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[diabetes-dashboard started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[diabetes-dashboard has shut down successfully]=-"))
   :middleware wrap-dev})
