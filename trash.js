<div class="content_app">
            <div class="title">
              <%= item.title %>
            </div>
            <div class="date">
              <%= item.pubDate %>
            </div>
            <div class="image">
                <a href="#">
                  <%- item.content.slice(item.content.search("img")-1 , item.content.search("br")) %>
                </a>
            </div>
            <div class="description">
                <%= item.contentSnippet %>
            </div>
            
        </div>