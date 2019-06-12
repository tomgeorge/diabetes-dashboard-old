(ns diabetes-dashboard.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [diabetes-dashboard.core-test]))

(doo-tests 'diabetes-dashboard.core-test)

