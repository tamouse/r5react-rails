# Rails 5 + webpacker + react-rails

Start off with simply `rails new r5react-rails -d postgresql --no-rc`

Add `webpacker` and `react-rails` gems to `Gemfile`

Installs:

- `rake webpacker:install`
- `rake webpacker:install:react`
- `rails g react:install`

Generated:

- `rails g react:component HelloWorld greeting:string`
- `rails g controller Static hello_world`

Edited `app/views/static/hello_world.html.erb`, added:

    <%= javascript_pack_tag 'application' %>
    <%= react_component("HelloWorld", { greeting: "Hello, World!" } )%>

and it Works!
