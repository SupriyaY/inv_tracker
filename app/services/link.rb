module Services

    class LinkServices

        include HTTParty


    

        def self.get_categories
            @api_key = ENV["LINK_APIKEY"]
            @response = HTTParty.get("http://api.shopstyle.com/api/v2/categories?pid=#{@api_key}")


        end
    end
end