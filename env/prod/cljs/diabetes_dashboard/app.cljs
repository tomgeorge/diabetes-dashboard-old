(ns diabetes-dashboard.app
  (:require [diabetes-dashboard.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
