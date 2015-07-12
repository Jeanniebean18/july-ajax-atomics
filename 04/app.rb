require "sinatra"

get "/" do
  erb :"home"
end

get "/:msg" do
  message = params["msg"]
  first_letter = message[0]
  if first_letter == first_letter.capitalize && first_letter.to_i == 0
    @response_message = "You wrote #{message}. Is that someone's name?"
  elsif  first_letter.to_i != 0
    @response_message =  "You wrote #{message}. Is that how old you are?"
  else
    @response_message =  "You wrote #{message}. Whatever."
  end
end