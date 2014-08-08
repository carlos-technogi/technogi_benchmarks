require 'test_helper'

class BenchmarkControllerTest < ActionController::TestCase
  test "should get p1" do
    get :p1
    assert_response :success
  end

  test "should get p2" do
    get :p2
    assert_response :success
  end

  test "should get p3" do
    get :p3
    assert_response :success
  end

  test "should get p4" do
    get :p4
    assert_response :success
  end

end
