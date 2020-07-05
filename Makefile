build:  ## Build index.html from index.md
	pandoc -s index.md -o index.html \
		--css style.css \
		--metadata title="Antonio Bustos" \
    --metadata keywords="antonio,bustos,valencia,portfolio,antoniobusrod,busrod,cv" \
    --metadata description="Antonio Bustos, software engineer focused on web and network applications" \
    --metadata viewport="width=device-width, initial-scale=1"

help: ## Display this help text
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
