require 'sinatra'

get'/' do
	erb :index
end

get '/clock' do
	erb :clock
end

get '/variables' do
	erb :variables
end

get '/keyboardsounds' do
	erb :keyboardsounds
end